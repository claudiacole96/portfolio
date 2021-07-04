import React from "react"

class Contact extends React.Component {
    render() {
        return (
            <main>
                <form>
                    <input placeholder="Name" />
                    <input placeholder="State" />
                    <input placeholder="Subject" />
                    <input placeholder="What would you like to contact us about?" />
                    <button>Submit</button>
                </form>
            </main>
        )
    }
}
export default Contact;