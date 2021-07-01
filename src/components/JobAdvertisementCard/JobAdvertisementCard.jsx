import React from "react";
import {
  Card,
  Icon,
  Grid,
  Image,
  Header,
  Button,
  List,
  Popup
} from "semantic-ui-react";
import "./JobAdvertisementCard.css";
import { NavLink } from "react-router-dom";
export default function JobAdvertisementCard({jobAd}) {
  return (
    <div>
          <Card className="custom-card">
            <Card.Content>
              <Card.Header>
                <Grid>
                  <Grid.Column width={4}>
                    <Image
                      className="custom-brand-img"
                      src={jobAd.employer.avatarPath}
                      size="small"
                      circular
                    />
                  </Grid.Column>
                  <Grid.Column width={12} className="text-left">
                    <Header className="header header-1" as="h3">
                      {jobAd.jobDescription}  <Popup
    trigger={<Icon  name='check circle' className="popup-icon" />}
    content="Bu ilan ekiplerimiz tarafından incelendi ve onaylandı."
    basic
  />
                    </Header>
                    <Header className="header header-2" as="h5">
                      <Icon name="map marker alternate"></Icon> {jobAd.city.name}
                    </Header>
                    <Header className="header header-2" as="h5">
                      <Icon name="address book"></Icon> {jobAd.jobPosition.positionName}
                    </Header>
                    <Header className="header header-2" as="h5">
                 
                      <Icon name="building"></Icon> {jobAd.employer.companyName} 
                    </Header>
                    <Button primary basic>
                      Kaydet
                    </Button>
                    <Button secondary>Başvur</Button>
                  </Grid.Column>
                </Grid>
              </Card.Header>
              <Card.Description className="gray-desc-area">
                <Grid columns={2}>
                  <Grid.Column className="text-left">
                    <List className="list">
                      <List.Item icon="time" content={jobAd.workingTime.description}></List.Item>
                      <List.Item
                        icon="home"
                        content={jobAd.workingType.description}
                      ></List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column className="text-left">
                    <List className="list">
                      <List.Item
                        icon="lock"
                        content={`Son Tarih: ${(new Date(jobAd.lastApplyDate),"dd.MM.yyyy")}`}
                      ></List.Item>
                      <List.Item icon="money" content={(jobAd.minSalary || jobAd.maxSalary) ? `${jobAd.minSalary} - ${jobAd.maxSalary} ₺` : "Belirtilmemiş"}></List.Item>
                    </List>
                  </Grid.Column>
                </Grid>
              </Card.Description>
            </Card.Content>
            <Card.Content as={NavLink} to={`X`}>İş İlanına Git</Card.Content>
          </Card>
      
    </div>
  );
}