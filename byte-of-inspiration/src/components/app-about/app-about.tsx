import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-about',
    styleUrl: 'app-about.css',
    shadow: true
})
export class AppAbout {
    render() {
        return (
            <section>
                <h2>About Me</h2>
                <p>This is where I talk about myself...</p>
            </section>
        );
    }
}