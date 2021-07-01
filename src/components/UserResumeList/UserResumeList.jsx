import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResumeService from "../../services/resumeService";
import { getAllByUserIdAsync } from "../../store/actions/cvActions";
import CVCard from "../CVCard/CVCard";
import { Grid, Header, Button, Icon } from "semantic-ui-react";
export default function UserResumeList() {
  const resumes = useSelector((state) => state.resumes);
  const { authState } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userId = authState.user ? authState.user.userId : 1;
  dispatch(getAllByUserIdAsync(userId));
  return (
    <div className="mt-10">
      <Grid>
        <Grid.Column width={16}>
          <Header as="h1" className="text-center">
            Oluşturduğunuz CV'ler
          </Header>
        </Grid.Column>
      </Grid>
      {resumes.err ?? <div>{resumes.err}</div>}
      {resumes.loading ? (
        <div>Loading</div>
      ) : resumes.err ? (
        <div>{resumes.err}</div>
      ) : resumes.data ? (
        resumes.data.map((resume) => <CVCard resume={resume}></CVCard>)
      ) : null}
    </div>
  );
}