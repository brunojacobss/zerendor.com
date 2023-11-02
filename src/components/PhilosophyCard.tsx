import { Fragment } from 'react';
import Equation from './Equation';
import { motion, useCycle } from 'framer-motion';

export default function PhilosophyCard(): JSX.Element {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <motion.div
      layout
      style={{
        backgroundColor: '#EDFFFF',
        height: open ? '100%' : 130,
        width: open ? '100%' : 326,
        position: 'fixed',
        bottom: open ? undefined : 0,
        left: open ? 0 : '50%',
        top: open ? 0 : undefined,
        marginLeft: open ? undefined : '-163px',
        padding: open ? '2rem' : '0 2rem 0',
      }}
    >
      <motion.div layout>
        <div className="flex flex-row justify-end">
          <span
            onClick={() => cycleOpen()}
            className="underline  text-[#717171]/80 card-text mt-3 text-xs cursor-pointer"
          >
            {open ? 'Close me' : 'Open me'}
          </span>
        </div>
        <div className="text-[#717171]/80 card-text text-xs  mt-4">
          <span className="mb-2 block">
            Behind the Philosophy of this website, a 3 minute read:
          </span>
          <Equation isCardOpen={open} type="Design" attribute="Solution" />
          <Equation isCardOpen={open} type="Passion" attribute="Keystone" />
          <Equation isCardOpen={open} type="Discipline" attribute="Success" />

          <p className="mt-4">
            I believe in design as a solution. As taught in architecture
            classrooms, design is an adaptive answer to crafting and perfecting
            great things. I believe in passion as a keystone. The enabler of
            memorable experiences, passion is a driving force to nourish
            creativity and shape simple interfaces. I believe in discipline as
            success. Innate to human nature, discipline is a robust foundation
            to hold when receiving feedback and experiencing failure.
            <br />
            <br /> In a simple rule of thirds, the philosophy of this website is
            the philosophy of my life and the way I view things. These three
            cornerstones can work independently, but their combination is the
            key to knocking it out of the park.
            <br />
            <br /> It's your turn to homerun your brand, startup, or company.
            Rates start at 999 USD for individuals. Parity pricing available.
            <br />
            <br /> Thanks for visiting zerendor.com Waitlist your ‘I VISITED
            ZERENDOR.COM’ poster{' '}
            <span className="underline cursor-pointer">here</span>
          </p>
          <span className="block mt-4">Lima, Peru. 2023.</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
