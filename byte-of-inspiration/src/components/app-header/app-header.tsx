import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true
})
export class AppHeader {
  render() {
    return (
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <stencil-route-link url="/">Home</stencil-route-link>
          <stencil-route-link url="/projects">Projects</stencil-route-link>
          <stencil-route-link url="/about">About</stencil-route-link>
          <stencil-route-link url="/contact">Contact</stencil-route-link>
        </nav>
      </header>
    );
  }
}
