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
    await verifyUserEmail(query.crsid, query.signupType);
  }

  return { props: { verified } };
}

const SuccessPage = ({ verified }) => {
  return (
    <Container>
      <Card>
        {verified ? (
          <VerifMsg>Signup was confirmed &nbsp;🎉</VerifMsg>
        ) : (
          <VerifMsg>
            Oops, something went wrong, please email
            meetnewpeopleatcam@gmail.com if the problem persists.
          </VerifMsg>
        )}
      </Card>
    </Container>
  );
};

export default SuccessPage;
