import { MailPreview } from '../cmps/mail-preview.jsx'

export function MailsList(props) {
    const { mails } = props
    return <section className="list-container">
        {mails && mails.map(mail => <MailPreview key={mail.id} mail={mail} props={props} />)}
    </section>
}