import Styled from "styled-components";

import Container from "../../shared/Container";
import Card from "../../shared/Card";
import { getCRSIDHash } from "../../common/verification";
import { verifyUserEmail } from "../../common/gsheets";

const VerifMsg = Styled.div`
  margin: 20px;
  font-size: 1.3em;
`;

export async function getServerSideProps({ query }) {
  const verified = getCRSIDHash(query.crsid) === query.auth;
  if (verified) {
    await verifyUserEmail(query.crsid);
  }

  return { props: { verified } };
}

const SuccessPage = ({ verified }) => {
  return (
    <Container>
      <Card>
        {verified ? (
          <VerifMsg>Email was sucessfully verified &nbsp;🎉</VerifMsg>
        ) : (
          <VerifMsg>
            Incorrect verification link, please email
            meetnewpeopleatcam@gmail.com
          </VerifMsg>
        )}
      </Card>
    </Container>
  );
};

export default SuccessPage;
