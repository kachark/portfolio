/// <reference types="@sveltejs/kit" />

namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onclick_outside?: (e: CustomEvent) => void;
  }
}
