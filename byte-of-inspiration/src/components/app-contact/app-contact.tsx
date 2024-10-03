import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-contact',
    styleUrl: 'app-contact.css',
    shadow: true
})
export class AppContact{
    render() {
        return (
            <section>
                <h2>Contact</h2>
                <p>Feel free to reach out to me...</p>
            </section>
        )
    }
}