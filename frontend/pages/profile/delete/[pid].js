import axios from "axios";

import { withRouter } from "next/router";

const ProfileDelete = () => {
  return <div>Delete</div>;
};

ProfileDelete.getInitialProps = async (ctx) => {
  try {
    let cookieName = "super-session=s%3A";
    let cookie = ctx.req.headers.cookie.substr(
      ctx.req.headers.cookie.indexOf(cookieName) + cookieName.length,
      32
    );
    let sessionResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/session/${cookie}`
    );
    if (ctx.query.pid === sessionResponse.data.userId) {
      axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/profiles/${ctx.query.pid}`
      );

      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: `/login`,
        });
        ctx.res.end();
      }
    } else {
      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: `/profile/info/${ctx.query.user}`,
        });
        ctx.res.end();
      }
    }
  } catch (error) {
    console.log(error);
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/login",
      });
      ctx.res.end();
    }
  }
};

export default withRouter(ProfileDelete);
