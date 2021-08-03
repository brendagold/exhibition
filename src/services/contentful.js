// contentful.js v4.x.x
const contentful = require('contentful')

const client = contentful.createClient({
  space: ' nbe8tmkxy59u',
  accessToken: 'ynfiaMt1N5Skp8U-uq7Z49Xc9OSl6g-je6-cEcapCqU'
})

const asset = client.getAsset('<asset_id>')
  .then((asset) => console.log(asset.fields.file.url))


  // <div>

        //   <Card key={ex.sys.id} id={ex.sys.id} mt="6">
        //     <CardImg
        //       top
        //       width="100%"
        //       src={`https://artic-web.imgix.net/null82799ca2-66ed-4596-ab7e-283933a8be51/NPG_2018_16Obama_press.jpg?rect=0%2C377%2C2046%2C1151&auto=format&fm=jpg&q=1&fit=crop&crop=faces%2Cedges%2Centropy&w=750&h=422&blur=1200&sat=20`}
        //       alt="Card image cap"
        //     />
        //     <CardBody>
        //       <CardTitle tag="h5">{ex.fields.exhibition}</CardTitle>
        //       {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
        //         Card subtitle
        //       </CardSubtitle> */}
        //       <CardText>{`${moment(ex.fields.date).format(
        //         "DD/MM/YYYY"
        //       )} - ${moment(ex.fields.endDate).format(
        //         "DD/MM/YYYY"
        //       )}`}</CardText>
        //       <Button onClick={() => removeTogo(ex)}>
        //         Remove from Togo list
        //       </Button>
        //     </CardBody>
        //   </Card>

        // </div>