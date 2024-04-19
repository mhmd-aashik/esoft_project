import React from "react";

const Accordion = () => {
  return (
    <div className="max-w-7xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto flex flex-col gap-4">
      <h1 className="text-white font-bold text-3xl text-center py-6">
        Frequently Asked Questions
      </h1>
      <div className="collapse collapse-plus border-2 border-blue-950 ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-white">
          What kind of volunteer opportunities do you offer ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            We offer a wide range of volunteer opportunities to suit different
            interests and skills. From community outreach programs to
            environmental initiatives, there&apos;s something for everyone. You
            can explore our current volunteer openings on our website or contact
            us directly for more information.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
        </div>
        <div className="collapse-content">
          <p className="text-white">
           
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
         
        </div>
        <div className="collapse-content">
          <p className="text-white">
            
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-white">
          {" "}
        </div>
        <div className="collapse-content">
          <p className="text-white">
           
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
         
        </div>
        <div className="collapse-content">
          <p className="text-white">
            
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
         
        </div>
        <div className="collapse-content">
          <p className="text-white">
           
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-white">
         
        </div>
        <div className="collapse-content">
          <p className="text-white">
           
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
         
        </div>
        <div className="collapse-content">
          <p className="text-white">
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;