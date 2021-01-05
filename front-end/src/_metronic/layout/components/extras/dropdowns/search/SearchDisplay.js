import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import SearchResult from "./SearchResult";

export function DataDisplaysPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/_metronic/layout"
        to="/_metronic/layout/components/extras/search/SearchResult"
      />
      <ContentRoute
        path="/_metronic/layout/components/extras/search/SearchResult"
        component={SearchResult}
      />
    </Switch>
  );
}
