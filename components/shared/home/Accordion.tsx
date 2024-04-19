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
          Do I need any specific skills or experience to volunteer ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            Not necessarily! While some positions may require specific skills or
            experience, many of our volunteer opportunities are open to
            individuals of all backgrounds and skill levels. We provide training
            and support to help you succeed in your role.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
          Can I volunteer remotely ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            Yes, we offer remote volunteer opportunities for those who are
            unable to volunteer in person. Whether you&apos;re interested in
            virtual mentoring, online research projects, or remote
            administrative tasks, there are plenty of ways to make a difference
            from the comfort of your own home.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-white">
          How much time do I need to commit as a volunteer ?{" "}
        </div>
        <div className="collapse-content">
          <p className="text-white">
            The time commitment varies depending on the volunteer role and your
            availability. Some opportunities may require a few hours a week,
            while others may be more intensive. We&apos;ll work with you to find
            a volunteer schedule that fits your needs and lifestyle.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
          What are the benefits of volunteering with your organization ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            Volunteering with us is a rewarding experience that allows you to
            make a positive impact on your community or cause you care about. In
            addition to the satisfaction of giving back, volunteering can also
            provide opportunities for personal and professional growth,
            networking, and skill development.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
          Is there an age requirement for volunteering ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            The age requirement varies depending on the volunteer opportunity.
            Some positions may be open to volunteers of all ages, while others
            may have specific age restrictions or require parental consent for
            minors. We&apos;ll provide guidance on age requirements for each
            volunteer opportunity.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-white">
          I have a busy schedule. Can I still volunteer ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            Absolutely! We understand that everyone has different commitments
            and schedules. We offer flexible volunteer opportunities that can
            accommodate your availability. Whether you have a few hours a week
            or only occasional free time, there&apos;s a volunteer role
            that&apos;s right for you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border-2 border-blue-950">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
          Do you provide volunteer orientation and training ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            Yes, we offer volunteer orientation and training sessions to ensure
            that you&apos;re equipped with the knowledge and skills needed to
            excel in your role. These sessions cover topics such as the
            organization&apos;s mission and values, volunteer responsibilities,
            and specific training related to your volunteer position.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
