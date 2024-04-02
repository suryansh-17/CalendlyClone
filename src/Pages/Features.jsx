import React from "react";
import { FeatureCard, FeatureCardCenter, Button } from "../components";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
function Features() {
  return (
    <div>
      <FeatureCard
        heading2="Retain control as your team scales"
        description="Working within one organizational account ensures you securely account for all active users as you scale. With Calendly, IT teams can maintain more oversight over account access and individual permissions, as well as audit activity at any time."
        image={f1}
        imgRight
      />
      <FeatureCard
        heading2="Automate IT workflows to accomplish more"
        description="Calendly's advanced security integrations overlay seamlessly with your corporate authentication policies and provisioning workflows. IT admins save time and reduce risk with auto-provisioning and deprovisioning via SCIM and Single Sign-On (SSO)."
        image={f2}
        className="bg-gray-100 py-5"
      />
      <FeatureCard
        heading2="Get more value from your existing technology"
        description="Calendly securely integrates with the tools your teams rely on every day. This includes seamless OAuth through Google Calendar and Office365 as well as integrations across leading video conferencing tools (Zoom, Google Meet, Microsoft Teams, Webex), and more."
        imgRight
        image={f3}
      />
      <FeatureCardCenter
        heading1="CALENDLY FEATURES"
        heading2="Favourite Security Features"
        descriprion="Here's a closer look at some of the security features IT admins enjoy
        with Calendly."
      />
      <div className="flex space-x-4 mt-5 justify-center">
        <Button className="px-8 py-3 font-semibold">Start for free</Button>
        <Button
          bgColor="bg-white"
          textColor="text-black"
          className="border-2 border-black font-semibold px-8 py-3"
        >
          Learn More
        </Button>
      </div>

      <FeatureCard
        heading1="USER PII DATA DELETION"
        heading2="Maintain GDPR compliance"
        description="Stay compliant with privacy rules and regulations at scale with self serive data deleteion,which allows admins to immediately erase user data as needed."
        image={f4}
      />
      <FeatureCard
        heading1="USER GROUPS"
        heading2="Save time with group admins"
        image={f5}
        description="Delegate specific team members with group admin privileges to manage users, processes, and other account settings."
        imgRight
      />
      <FeatureCard
        heading1="SINGLE SIGN-ON (SSO)"
        heading2="Reduce risk with secure authentication"
        description="Deploy Calendly confidently with support for SAML- based SSO with leading identity providers Okta, Ping Identity, Azure, OneLogin, and Autho."
        image={f6}
      />
      <FeatureCard
        heading1="SCIM PROVISIONING"
        heading2="Manage user access at scale"
        description="Efficiently onboard and off-board employees with automatic provisioning and de-provisioning via SCIM with Okta, OneLogin, and Microsoft Azure"
        image={f7}
        imgRight
      />
      <FeatureCardCenter
        heading1="SUCCESS STORIES"
        heading2="Do more of what you do best"
        descriprion="Eliminate scheduling hassless and interruptioons so your organization accomplishes more."
      />
    </div>
  );
}

export default Features;
