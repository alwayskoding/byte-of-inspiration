import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-footer',
    styleUrl: 'app-footer.css',
    shadow: true
})
export class AppFooter {
    render() {
        return (
            <footer>
                <p>&copy; 2024 My Portfolio</p>
                <ul>
                    <li><a href="https://github.com">GitHub</a></li>
                    <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
            </footer>
        );
    }
}