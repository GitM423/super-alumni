import React, { Component } from "react";

class ProfileEdit extends Component {
    state = {}
    render() {
        return (
            <main id="edit">
                <section>
                    <div className="vertical-text">Profil erstellen</div>
                    <form className="profil-form" action="" method="POST">
                        <fieldset>
                            <h2>Dein Profil</h2>
                            <input type="text" name="fname" id="" placeholder="First name"></input>
                            <input type="text" name="lname" id="" placeholder="Last name"></input>
                            <input type="text" name="email" id="" placeholder="Email"></input>
                            <input type="text" name="github" id="" placeholder="Github repository-Url"></input>
                            <input type="text" name="linkedin" id="" placeholder="LinkedIn-Url"></input>
                            <input type="text" name="image" id="" placeholder="Profile picture-Url"></input>
                        </fieldset>
                        <input className="btn btn-purple" type="submit" value="Submit"></input>
                    </form>
                </section>

                <section>
                    <form action="" method="POST">
                        <fieldset>
                            <div>
                                <div className="filter-tag">tag1</div>
                                <div className="filter-tag">tag2</div>
                                <div className="filter-tag">tag3</div>
                            </div>

                            <input type="text" name="job-title" id="" placeholder="Job title"></input>
                            <input type="text" name="company" id="" placeholder="Company"></input>
                            <textarea name="nachricht" id="" cols="30" rows="10" placeholder="Profile Slogan"></textarea>
                            <input className="search" type="search" name="skills-search" id="" placeholder="Skills"></input>

                            <div>
                                <div className="filter-tag">tag1 +</div>
                                <div className="filter-tag">tag2 +</div>
                                <div className="filter-tag">tag3 +</div>
                            </div>

                            <div className="bar-wrap">
                                <h3>Berufserfahrung</h3>
                                <div className="full-bar">
                                    <span className="bar"></span>
                                </div>
                            </div>

                            <div class="wrap">
                                <div class="wrap-tags">
                                    <div className="filter-tag">tag1 +</div>
                                    <div className="filter-tag">tag2 +</div>
                                    <div className="filter-tag">tag3 +</div>
                                    <div className="filter-tag">tag1 +</div>
                                    <div className="filter-tag">tag2 +</div>
                                    <div className="filter-tag">tag3 +</div>
                                </div>

                                <input className="btn btn-purple fade" type="submit" value="Submit"></input>
                            </div>

                        </fieldset>
                    </form>
                </section>
            </main>
        );
    }
}

export default ProfileEdit;