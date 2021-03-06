import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';
import AllPosts from './AllPosts';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import EditPost from './EditPost';
import CategoryPosts from './CategoryPosts';
import NoMatch from './NoMatch';


const BaseView = () => (
  <div className="base">
    <AppHeader />
    <main>
      <Sidebar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route exact path="/posts/create" component={CreatePost} />
          <Route exact path="/:category/:post_id" component={PostDetail} />
          <Route exact path="/:category/:post_id/edit" component={EditPost} />
          <Route path="/:category" component={CategoryPosts} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </main>
  </div>
);

export default BaseView;
