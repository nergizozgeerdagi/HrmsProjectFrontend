import React from 'react'
import { Card, Grid ,Header,Label,Button,Icon} from 'semantic-ui-react'
import './CVCard.css';
export default function CVCard({resume}) {
    return (
            <Card className="custom-card mt-3">
    <Card.Content>
        <Grid>
            <Grid.Column width={11} className="text-left custom-grid-col">
                <Header className="custom-header" as="h2">
                {resume.coverLetter}
                </Header>
                <Label >
                   Oluşturma Tarihi:  {resume.createDate ? (new Date(resume.createDate.replace("T"," ")),"dd.MM.yyyy") : ""}
  </Label>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button className="cv-card-btn" basic  >Görüntüle <Icon name="arrow right"></Icon></Button>
                </Grid.Column>
        </Grid>
    </Card.Content>
  </Card>
    )
}