import React, { useState } from 'react';
import gradients from "./gradients"
import GradientsList from "./components/GradientsList"
import GradientsHeader from "./components/GradientsHeader"

function App() {
  return (
    <>
    <GradientsHeader list={gradients}>
    <h1 class="display-1">Alyra Gradients</h1>
    <p class="tagline">Ultime collection de plus beaux dégradés</p>
  </GradientsHeader >
  <main className='container'>
    <h2 className='display-5 text-center my-5'>Alyra Gradients</h2>
  <GradientsList list={gradients} />
    <ul className="row list-unstyled"></ul>
  </main>
  <footer className="bg-dark text-white text-center p-3">Made with Love for Alyra</footer>
  </>
  );
}

export default App;