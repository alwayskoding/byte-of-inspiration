import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <app-header></app-header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true}></stencil-route>
              <stencil-route url="/projects" component="app-projects"></stencil-route>
              <stencil-route url="/about" component="app-about"></stencil-route>
              <stencil-route url="/contact" component="app-contact"></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>

        <app-footer></app-footer>
      </div>
    );
  }
}
