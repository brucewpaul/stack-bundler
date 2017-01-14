import React, { Component } from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../../src/components/App.jsx';
import List from '../../src/components/List.jsx';
import ListInput from '../../src/components/ListInput.jsx';
import ListItem from '../../src/components/ListItem.jsx';

describe("ListItem Component", function() {
  var listItemData = {
    title: 'ListItem',
    text: 'ListItemText'
  }

  it("should render a title when mounted", function() {
    expect(shallow(<ListItem content={listItemData}/>).contains(<h3>ListItem</h3>)).to.equal(true);
  });

  it("should render a text when mounted", function() {
    expect(shallow(<ListItem content={listItemData}/>).contains(<p>ListItemText</p>)).to.equal(true);
  });
});

describe("List Component", function() {
  var listData =
  [
    {
      title: 'ListItem1',
      text: 'ListItemText1'
    },
    {
      title: 'ListItem2',
      text: 'ListItemText2'
    },
    {
      title: 'ListItem3',
      text: 'ListItemText3'
    },
  ];

  it("should render a 3 item list", function() {
    expect(shallow(<List listItems={listData}/>).contains([
      <ListItem content={listData[0]}/>,
      <ListItem content={listData[1]}/>,
      <ListItem content={listData[2]}/>
    ])).to.equal(true);
  });
});

describe("App Component", function() {
  it("should render a list", function() {
    expect(shallow(<App />).contains([
      <List listItems={[]}/>
    ])).to.equal(true);
  });
});