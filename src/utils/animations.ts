import { gsap } from "gsap";

export const animateQuotes = (): void => {
  const quotes = document.querySelectorAll<HTMLElement>(".meme-quote");
  if (!quotes.length) {
    console.warn("No quotes found to animate.");
    return;
  }
  gsap.to(quotes, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power3.out",
  });
};

export const animateRecipeCard = (): void => {
  const recipeCard = document.querySelector<HTMLElement>(".recipe-card");
  if (!recipeCard) {
    console.warn("No recipe card found to animate.");
    return;
  }
  gsap.fromTo(
    recipeCard,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
  );
};

export const transitionStages = (fromStage: HTMLElement, toStage: HTMLElement): void => {
  if (!fromStage || !toStage) {
    console.error("Invalid stages provided for transition.");
    return;
  }

  gsap.to(fromStage, {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => {
      fromStage.classList.add("hidden");
      toStage.classList.remove("hidden");
      gsap.fromTo(
        toStage,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    },
  });
};

export const initButtonAnimations = (): void => {
  const buttons = document.querySelectorAll<HTMLButtonElement>("button");
  if (!buttons.length) {
    console.warn("No buttons found for hover animations.");
    return;
  }

  buttons.forEach((button) => {
    const icon = button.querySelector<HTMLElement>(".icon");
    if (!icon) {
      console.warn(`Button "${button.textContent?.trim()}" has no icon.`);
      return;
    }

    button.addEventListener("mouseenter", () => {
      gsap.to(icon, { rotate: 12, duration: 0.3 });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(icon, { rotate: 0, duration: 0.3 });
    });
  });
};