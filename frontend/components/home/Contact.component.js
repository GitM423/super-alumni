const Contact = () => {
  return (
    <div>
      <article>
        <h1>Hi, wie können wir dir helfen?</h1>
        <p>
          An diesen Zeiten erreichst du uns am besten an folgenden tagen und
          Zeiten:
        </p>
        <p>Montag - Freitag 09:00 - 17:00 Uhr</p>
        <p>
          Unser Campus befindet sich im Super7000 Coworking Space – der Mutter
          aller Coworking Spaces. Die genau Adresse lautet:
        </p>
        <p>Ratherstr. 25 40476 Düsseldorf</p>
      </article>

      <form action="/api/contact/send" method="POST">
            <fieldset>
                <input type="text" name="firstName" id="" placeholder="Vorname"></input>
                <input type="text" name="lastName" id="" placeholder="Name"></input>
                <input type="text" name="email" id="" placeholder="Email"></input>
                <input type="text" name="phoneNumber" id="" placeholder="Telefonnummer"></input>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Nachricht"></textarea>
            </fieldset>
            <input className="contact-btn" type="submit" value="Einsenden"></input>
        </form>

      <style jsx>{`
        h1 {
          color: pink;
        }
      `}</style>
    </div>
  );
};

export default Contact;
