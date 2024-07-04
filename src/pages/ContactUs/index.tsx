
import { ContactUsForm } from '@/components/ContactUsForm/index';

import * as styled from './styled';

export function ContactUs() {
  return (
    <styled.ContactUsPageWrapper>
      <styled.ContentWrapper>
        <styled.DesctopTitle>Contact Us</styled.DesctopTitle>
        <styled.MobileTitle>Contact</styled.MobileTitle>
        <styled.Message>
          Say Hello send us your thoughts about our products or share
          <br />
          your ideas with our Team!
        </styled.Message>
        <ContactUsForm />
      </styled.ContentWrapper>
    </styled.ContactUsPageWrapper>
  );
}
