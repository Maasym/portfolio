import React from 'react';
import ansible from '../assets/ansible.png'
import argo from '../assets/argo.png'
import azure from '../assets/azure.png'
import confluence from '../assets/confluence.png'
import css from '../assets/css.png'
import docker from '../assets/docker.png'
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import grafana from '../assets/grafana.png'
import helm from '../assets/helm.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import jira from '../assets/jira.png'
import kubernetes from '../assets/kubernetes.png'
import mongodb from '../assets/mongodb.png'
import node from '../assets/node.png'
import postgresql from '../assets/postgresql.png'
import prometheus from '../assets/prometheus.png'
import react from '../assets/react.png'
import scrum from '../assets/scrum.png'
import terraform from '../assets/terraform.png'
import ubuntu from '../assets/ubuntu.png'
import git from '../assets/git.png'

function Skills() {

    return (
        <div className="mt-24 mb-24 text-slate-200 bg-slate-800">
            <div className="flex flex-col items-center">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-sm font-mono font-normal">
                    <div className="flex flex-col items-center rounded-md outline outline-1 outline-slate-500">
                        <div className="text-center text-3xl mb-4 mt-4 font-bold">
                            Experience in
                        </div>
                      <div className="flex flex-col flex-wrap lg:flex-col justify-between items-center text-center m-4 text-sm">
                          <div className="flex flex-row">
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={azure} alt="Azure" title="Azure"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={kubernetes} alt="Kubernetes" title="Kubernetes"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={terraform} alt="Terraform" title="Terraform"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={ansible} alt="Ansible" title="Ansible"/>
                          </div>
                          <div className="flex flex-row">
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={git} alt="Git" title="Git"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={gitlab} alt="Gitlab" title="Gitlab"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={github} alt="Github" title="Github"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={argo} alt="ArgoCD" title="ArgoCD"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={docker} alt="Docker" title="Docker"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={helm} alt="Helm" title="Helm"/>
                          </div>
                          <div className="flex flex-row">
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={jira} alt="Jira" title="Jira"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={confluence}  alt="Confluence" title="Confluence"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={prometheus} alt="Prometheus" title="Prometheus"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={grafana} alt="Grafana" title="Grafana"/>
                          </div>
                          <div className="flex flex-row">

                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={html} alt="HTML" title="HTML"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={css} alt="CSS" title="CSS"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={javascript} alt="Javascript" title="Javascript"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={react} alt="React" title="React"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={node} alt="Node" title="Node"/>
                          </div>
                          <div className="flex flex-row">
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={scrum} alt="Scrum" title="Scrum"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={mongodb} alt="MongoDB" title="MongoDB"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={postgresql} alt="PostgreSQL" title="PostgreSQL"/>
                              <img className="m-1 w-12 h-12 lg:w-28 lg:h-28" src={ubuntu} alt="Ubuntu" title="Ubuntu"/>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;