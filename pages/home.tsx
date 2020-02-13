import React from 'react';
import Layout from '../components/Layout';

import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next';
import { createUseStyles } from 'react-jss';

type HomeProps = {
  /** 별의 갯수에ㅐ용 ^^ */
  stars: number
}

const useStyels = createUseStyles({
  homeButton: {
    fontWeight: 'bold'
  }
})

const home: NextPage<HomeProps> = (props) => {
  const homeStyle = useStyels();
  return (
    <Layout>
      <div className={homeStyle.homeButton}>
        {props.stars}
      </div>
    </Layout>
  );
};

home.getInitialProps = async ctx => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default home;