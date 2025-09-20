import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Img,
} from "jsx-email";

export const previewProps = {
  url: "https://nss.org.ng/",
  name: "Dr. Emmanuel Watila",
};

export const templateName = "verification";

export const Template = ({ name, url }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Thank you for deciding to join the NSS as a member — we are thrilled to have you on board!
        🎉 Your membership is the first step toward connecting with a community that is passionate
        about making a difference.
      </Preview>
      <Container style={container}>
        <Section style={coverSection}>
          <Section style={imageSection}>
            <Img src="https://nss.org.ng/nss_logo.png" height={40} />
          </Section>

          <Section style={upperSection}>
            <Heading style={h1}>Verify your email address</Heading>

            <Text style={mainText}>Hello — {name},</Text>

            <Text style={mainText}>
              Thank you for deciding to join the Nigerian Sleep Society — we are thrilled to have
              you on board! 🎉 Your membership is the first step toward connecting with a community
              that is passionate about making a difference.
            </Text>

            <Text style={mainText}>
              Please click the button below to verify your email address:
            </Text>

            <Section style={verificationSection}>
              <Button style={button} href={url}>
                Verify Email Address
              </Button>
            </Section>

            <Hr />

            <Section>
              <Text style={verifyText}>This verification email will expire in 12 hours</Text>
            </Section>
          </Section>
        </Section>
        <Section style={footerSection}>
          <Text style={footerText}>NSS (Nigerian Sleep Society)</Text>
          <Text style={footerText}>Department of Medicine,</Text>
          <Text style={footerText}>Obafemi Awolowo University Teaching Hospital Complex,</Text>
          <Text style={footerText}>Ile-Ife, Nigeria.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
};

const button = {
  backgroundColor: "#07662e",
  borderRadius: "12px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontWeight: "500",
  color: "#fff",
  fontSize: "14px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "15px 25px",
  width: "fit-content",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  margin: "0 auto",
  padding: "25px 0px",
  backgroundColor: "#ffffff",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 0px" };

const footerText = {
  ...text,
  margin: "0",
  color: "#71717a",
  fontSize: "11px !important",
  lineHeight: "20px",
};

const footerSection = {
  padding: "0 0px",
  margin: "10px 0",
};

const verifyText = {
  ...text,
  margin: 0,
  fontSize: "12px",
  fontWeight: "medium",
};

const verificationSection = {
  margin: "20px auto",
};

const mainText = { ...text, marginBottom: "14px" };
