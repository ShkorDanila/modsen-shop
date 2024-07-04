import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import * as styled from './styled';
import { ArrowSvg } from '@/assets/ArrowSvg';
import { LinkedInSvg } from '@/assets/LinkedInSvg';
import { FacebookSvg } from '@/assets/FacebookSvg';
import { InstagramSvg } from '@/assets/InstagramSvg';
import { TwitterSvg } from '@/assets/TwitterSvg';
import { StyledLink } from '@/utils/StyledLink';
import emailjs from '@emailjs/browser';

const FooterComponent: React.FC = () => {

  const [email, setEmail] = useState("")

  const subscribeToMail = () => {
    if(email != "")
    alert("Вы подписались на новости")
    // emailjs.send('service_kts1md9', 'template_8tllynt', {email: email}).then(
    //     (response) => {
    //         alert("Вы подписались на новости")
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
  };

  return (
    <styled.FooterWrapper
      isOpened={useSelector((state: any) => state.isMenuOpened.value)}
    >
      <styled.Hr/>
      <styled.FooterContent>
        <styled.EmailAreaWrapper>
          <styled.EmailInputWrapper>
            <styled.EmailWithArrowWrapper>
              <styled.EmailInput onChange={(e) => {setEmail(e.currentTarget.value)}} placeholder="Give an email, get the newsletter" />
              <styled.EmailButton onClick={subscribeToMail}>
                <ArrowSvg/>
              </styled.EmailButton>
            </styled.EmailWithArrowWrapper>
          </styled.EmailInputWrapper>
          <styled.CheckBoxWrapper>
            <styled.CheckBox type="checkbox" />
            <styled.CheckBoxText>
              i agree to the website’s terms and conditions
            </styled.CheckBoxText>
          </styled.CheckBoxWrapper>
        </styled.EmailAreaWrapper>

        <styled.Buttons>
          <styled.LiButton>
            <StyledLink to={"/contact"}><styled.Button>CONTACT</styled.Button></StyledLink>
          </styled.LiButton>
          <styled.LiButton>
            <styled.Button>TERMS OF SERVICES</styled.Button>
          </styled.LiButton>
          <styled.LiButton>
            <styled.Button>SHIPPING AND RETURNES</styled.Button>
          </styled.LiButton>
        </styled.Buttons>

        <styled.ContactsWrapper>
          <styled.FollowText>
            <styled.IconsText>Follow us</styled.IconsText>
            <styled.Line />
          </styled.FollowText>

          <styled.ContactButton>
            <LinkedInSvg/>
          </styled.ContactButton>
          <styled.ContactButton>
            <FacebookSvg/>
          </styled.ContactButton>
          <styled.ContactButton>
              <InstagramSvg/>
          </styled.ContactButton>
          <styled.ContactButton>
            <TwitterSvg/>
          </styled.ContactButton>
        </styled.ContactsWrapper>

        <styled.Text>
          <styled.Span>© 2023 Shelly.</styled.Span> Terms of use <styled.Span> and </styled.Span> privacy
          policy.
        </styled.Text>
      </styled.FooterContent>
    </styled.FooterWrapper>
  );
};
export default FooterComponent;
