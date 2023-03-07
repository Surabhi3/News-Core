import Moment from 'react-moment';

import {
  MDBRow,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBCardFooter,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from 'mdb-react-ui-kit';

export default function NewsCore({news}) {
  return (

    <MDBCard style={{ margin: 50 }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage
            src={news.urlToImage}
            className='img-thumbnail'
            alt='...'/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className='text-wrap'>{news.title}</MDBCardTitle>
            <MDBCardText className='text-wrap'>
              {news.description}
              <span className='text-success' style={{ fontSize: '0.875rem' }}>
                {/* <span>{news.source.name}</span> */}
              </span>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>
                Published At:
                <Moment format="DD MMM YYYY HH:mm">
                  {news.publishedAt}
                </Moment>
              </small>
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='border-0 p-2'>
            <MDBBtn color='none' className='ms-3' tag='a' href={news.url}>
              Read more <MDBIcon icon='arrow-right' className='ms-2' />
            </MDBBtn>
          </MDBCardFooter>
        </MDBCol>
      </MDBRow>

    </MDBCard>
  );
}