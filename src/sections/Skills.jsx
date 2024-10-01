import React from 'react';

import LogoLaravel from '../assets/img/LogoFigma.svg';

function Skills() {
  return (
    <section class="text-white lg:py-4">
      <div class="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div class="group-hover:animation-pause inline-block w-max transform animate-slide-left">
          {/* <!-- Ensure that the images cover entire screen width for a smooth transition --> */}
          <img class="mx-4 inline h-16" src={LogoLaravel} alt="Transistor" />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="SavvyCal"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
            alt="SavvyCal"
          />
        </div>

        {/* <!-- Duplicate of the above for infinite effect (you can use javascript to duplicate this too) --> */}
        <div class="group-hover:animation-pause inline-block w-max animate-slide-left">
          {/* <!-- Ensure that the images cover entire screen width for a smooth transition --> */}
          <img class="mx-4 inline h-16" src={LogoLaravel} alt="Transistor" />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="SavvyCal"
          />
          <img
            class="mx-4 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
            alt="SavvyCal"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
