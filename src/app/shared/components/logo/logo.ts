import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
<a routerLink="/" aria-label="Brand">
  <svg class="hover:text-primary" width="250" height="60" viewBox="0 0 250 60" fill="none">
    <style>
      /* Continuous bouncing animation */
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      /* Styling for each letter */
      .letter {
        font-family: Arial, sans-serif;
        font-size: 30;
        font-weight: bold;
        animation: bounce 2s infinite;
        transition: transform 0.3s ease, fill 0.3s ease;
      }

      /* Hover effect for each letter with different colors */
      .letter:nth-child(1):hover {
        fill: #4ab94a; /* Bice Green */
      }
      .letter:nth-child(2):hover {
        fill: #ffae00; /* Bright Yellow */
      }
      .letter:nth-child(3):hover {
        fill: #fd2100; /* Scarlet */
      }
      .letter:nth-child(4):hover {
        fill: #025576; /* Sea Blue */
      }
      .letter:nth-child(5):hover {
        fill: #e97575; /* Scarlet */
      }
      .letter:nth-child(6):hover {
        fill: #4ab94a; /* Bice Green */
      }
      .letter:nth-child(7):hover {
        fill: #ffae00; /* Bright Yellow */
      }
      .letter:nth-child(8):hover {
        fill: #fd2100; /* Scarlet */
      }
    </style>

    <!-- Portfolio Text with Individual Colors and Animation -->
    <text x="5" y="40" class="letter" style="fill: #e97575;">P</text> <!-- Scarlet -->
    <text x="30" y="40" class="letter" style="fill: #4ab94a;">o</text> <!-- Bice Green -->
    <text x="55" y="40" class="letter" style="fill: #ffae00;">r</text> <!-- Bright Yellow -->
    <text x="80" y="40" class="letter" style="fill: #fd2100;">t</text> <!-- Scarlet -->
    <text x="105" y="40" class="letter" style="fill: #025576;">F</text> <!-- Sea Blue -->
    <text x="130" y="40" class="letter" style="fill: #e97575;">o</text> <!-- Scarlet -->
    <text x="155" y="40" class="letter" style="fill: #4ab94a;">l</text> <!-- Bice Green -->
    <text x="175" y="40" class="letter" style="fill: #ffae00;">i</text> <!-- Bright Yellow -->
    <text x="190" y="40" class="letter" style="fill: #fd2100;">o</text> <!-- Scarlet -->
  </svg>
</a>








`
})
export class Logo {}
