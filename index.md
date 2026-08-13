---
layout: default
title: Inicio
description: Página principal del sitio
---

<section class="hero">
  <div class="hero-content">
    <p class="eyebrow">Bienvenido</p>

    <h1>Un sitio organizado por temas</h1>

    <p class="hero-text">
      Explora los diferentes contenidos disponibles en este sitio creado con
      Jekyll y publicado mediante GitHub Pages.
    </p>

    <a class="button" href="#temas">Explorar temas</a>
  </div>
</section>

<section id="temas" class="section">
  <div class="section-heading">
    <p class="eyebrow">Contenido</p>
    <h2>Temas principales</h2>
  </div>

  <div class="cards-grid">
    <a class="card" href="{{ '/temas/tema-1/' | relative_url }}">
      <span class="card-number">01</span>
      <h3>Tema 1</h3>
      <p>Introducción y conceptos fundamentales.</p>
    </a>

    <a class="card" href="{{ '/temas/tema-2/' | relative_url }}">
      <span class="card-number">02</span>
      <h3>Tema 2</h3>
      <p>Recursos y contenidos de aprendizaje.</p>
    </a>

    <a class="card" href="{{ '/temas/tema-3/' | relative_url }}">
      <span class="card-number">03</span>
      <h3>Tema 3</h3>
      <p>Ejemplos prácticos y casos de uso.</p>
    </a>

    <a class="card" href="{{ '/temas/tema-4/' | relative_url }}">
      <span class="card-number">04</span>
      <h3>Tema 4</h3>
      <p>Herramientas y recomendaciones.</p>
    </a>

    <a class="card" href="{{ '/temas/tema-5/' | relative_url }}">
      <span class="card-number">05</span>
      <h3>Tema 5</h3>
      <p>Material adicional y conclusiones.</p>
    </a>
  </div>
</section>

<section class="section section-muted">
  <div class="section-heading">
    <p class="eyebrow">Widgets</p>
    <h2>Recursos destacados</h2>
  </div>

  <div id="widget-list" class="widgets-grid">
    <p class="loading">Cargando recursos...</p>
  </div>
</section>
