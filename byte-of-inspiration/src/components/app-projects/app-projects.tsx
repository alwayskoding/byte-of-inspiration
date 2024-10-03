import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-projects',
    styleUrl: 'app-projects.css',
    shadow: true
})
export class AppProjects {
    render() {
        return (
            <section>
                <h2>My Projects</h2>
                <p>Here you can find a collection of my projects...</p>
            </section>
        );
    }
}