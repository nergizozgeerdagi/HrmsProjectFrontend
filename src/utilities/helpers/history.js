import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react';
import ResumeService from '../../services/resumeService';

export default function UserResumeList() {
    const [resumes,setResumes]  = useState([]);
    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getAll().then((success)=>{
            setResumes(success.data.data);
        });
    }, [])
    return (
        <div className="mt-4">
         <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>CV Ön Yazısı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {resumes.map((resume) => 
           ( <Table.Row key={resume.id}>
              <Table.Cell>{resume.coverLetter}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}