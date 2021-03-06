import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from './carousel.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  public slides = [
    {
      src: "../../assets/img/about-plan.jpg",
      header: "Board Meeting",
      body: "Tuesday, March 9 @ 6:30 PM. Held at the showgrounds.",
      link: { href: "/events", text: "View Events" }
    },
    {
      src: "../../assets/img/history-day-2.jpg",
      header: "Virtual History Day is Now Live!",
      body: "Step back in time and learn about life during the early rural days. Learn about the post office, sawmill, printing press, and more in our interactive tour or on our YouTube channel.",
      link: { href: "/history-day", text: "Watch Now" }
    },
    {
      src: "../../assets/img/intro-carousel/1.jpg",
      header: "Where the Past has a Future!",
      body: "The Illiana Antique Power Association is a non-profit organization dedicated to the preservation of our early rural way of life and the mechanical marvels that changed farming forever.",
      link: { href: "/", fragment: "about", text: "Learn More" }
    }
  ]
  currentSlide = 0;
  skipThisCycle = true;
  autoscrollDelay = 10000;

  constructor() { }

  ngOnInit(): void {
    this.preloadImages();
    this.autoScroll();
  }

  onPreviousClick() {
    this.skipThisCycle = true;
    this.previousSlide();
  }

  onNextClick() {
    this.skipThisCycle = true;
    this.nextSlide();
  }

  private preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  private autoScroll() {
    if (!this.skipThisCycle) {
      this.nextSlide();
    } else {
      setTimeout(() => { this.skipThisCycle = false }, 1000);
    }
    setTimeout(() => { this.autoScroll() }, this.autoscrollDelay);
  }

  private previousSlide() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  private nextSlide() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
