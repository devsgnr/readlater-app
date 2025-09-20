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
  Row,
  Column,
} from "jsx-email";

export const previewProps = {
  url: "https://nss.org.ng/membership/payments",
  name: "Dr. Emmanuel Watila",
  amount: 5000000, // in Kobo = ₦50,000
  tier: "Member",
};

export const templateName = "annual-payment";

export const Template = ({ name, url, amount, tier }) => {
  const amountInNaira = (amount / 100).toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>
          Hello {name}, your annual {tier} membership payment of {amountInNaira}
          is now due. Click below to complete your payment securely.
        </Preview>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img src="https://nss.org.ng/nss_logo.png" height={40} />
            </Section>

            <Section style={upperSection}>
              <Heading style={h1}>Annual Membership Payment</Heading>

              <Text style={mainText}>Hello — {name},</Text>

              <Text style={mainText}>
                We&apos;re glad to have you as part of the Nigerian Sleep Society. It&apos;s time to
                renew your annual membership!
              </Text>

              <Section style={tableSection}>
                <table style={tableStyle}>
                  <tbody>
                    <tr>
                      <td style={headerCellStyle}>Tier</td>
                      <td style={cellStyle}>{tier}</td>
                    </tr>
                    <tr>
                      <td style={headerCellStyle}>Dues</td>
                      <td style={cellStyle}>{amountInNaira}</td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              <Text style={mainText}>Please click the button below to complete your payment.</Text>

              <Section style={verificationSection}>
                <Button style={button} href={url}>
                  Pay Now
                </Button>
              </Section>

              <Hr />

              <Section>
                <Text style={verifyText}>
                  Kindly note that timely payment ensures uninterrupted membership benefits.
                </Text>
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
};

const main = { backgroundColor: "#fff", color: "#212121" };

const container = { padding: "20px", margin: "0 auto" };

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

const tableSection = { padding: "0px" };

const footerText = {
  ...text,
  margin: "0",
  color: "#71717a",
  fontSize: "11px",
  lineHeight: "20px",
};

const footerSection = { padding: "0 0px", margin: "10px 0" };

const verifyText = {
  ...text,
  margin: 0,
  fontSize: "12px",
  fontWeight: "medium",
};

const verificationSection = { margin: "20px auto" };

const mainText = { ...text, marginBottom: "14px" };

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
};

const cellStyle = {
  ...text,
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
  margin: "0",
  fontWeight: "600",
};

const headerCellStyle = {
  ...cellStyle,
  fontWeight: "normal",
};
