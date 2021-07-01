import React, { useState, useEffect } from "react";
import { Header,Button,Grid,Icon } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import JobAdvertisementCard from "../JobAdvertisementCard/JobAdvertisementCard";
import './JobAdvertisementList.css'
export default function JobAdvertisementList() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdsService = new JobAdvertisementService();
    jobAdsService.getJobAds().then((success) => setJobAds(success.data.data));
  }, []);

  return (
    <div className="mt-10">
      <Grid>
        <Grid.Column width={12}>
        <Header as="h1" className="text-left">Gündemdeki İş İlanları</Header>
        </Grid.Column>
        <Grid.Column width={4}>
      <Button className="float-right text-left allJobs-btn">Tüm İş İlanlarına Git <Icon name="arrow right"></Icon></Button>
        </Grid.Column>
      </Grid>

      <Grid columns={2}>
        {jobAds.map(jobAd=>(
          <Grid.Column key={jobAd.id}>
            <JobAdvertisementCard jobAd={jobAd}></JobAdvertisementCard>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}