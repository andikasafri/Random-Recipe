import { gsap } from 'gsap';

/**
 * Animates quotes by fading them in and moving them into position.
 */
export const animateQuotes = (): void => {
  const quotes = document.querySelectorAll<HTMLElement>('.meme-quote');

  if (quotes.length === 0) {
    console.warn('No quotes found to animate.');
    return;
  }

  gsap.to(quotes, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power3.out',
  });
};

/**
 * Animates the recipe card by fading it in from below.
 */
export const animateRecipeCard = (): void => {
  const recipeCard = document.querySelector<HTMLElement>('.recipe-card');

  if (!recipeCard) {
    console.warn('No recipe card found to animate.');
    return;
  }

  gsap.fromTo(
    recipeCard,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );
};

/**
 * Transitions between two stages by fading out the current stage and fading in the next stage.
 * @param fromStage - The current stage element to transition from.
 * @param toStage - The next stage element to transition to.
 */
export const transitionStages = (
  fromStage: HTMLElement,
  toStage: HTMLElement
): void => {
  if (!fromStage || !toStage) {
    console.error('Invalid stages provided for transition.');
    return;
  }

  gsap.to(fromStage, {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => {
      fromStage.classList.add('hidden');
      toStage.classList.remove('hidden');
      gsap.fromTo(
        toStage,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    },
  });
};

/**
 * Initializes hover animations for buttons with icons.
 */
export const initButtonAnimations = (): void => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('button');

  if (buttons.length === 0) {
    console.warn('No buttons found for hover animations.');
    return;
  }

  buttons.forEach((button) => {
    const icon = button.querySelector<HTMLElement>('.icon');

    if (!icon) {
      console.warn(`Button "${button.textContent?.trim()}" has no icon.`);
      return;
    }

    button.addEventListener('mouseenter', () => {
      gsap.to(icon, { rotate: 22, duration: 0.3 });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(icon, { rotate: 0, duration: 0.3 });
    });
  });
};
