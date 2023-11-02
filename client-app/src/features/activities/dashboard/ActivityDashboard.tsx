import { Grid } from "semantic-ui-react";
import { useEffect } from "react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layouts/LoadingComponent";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const { loadActivities, loadingInitial, activityRegistry} = activityStore;

  useEffect (()=>{
    if(activityRegistry.size <= 1 ) loadActivities();
  },[activityStore]);
  
  if(loadingInitial) return <LoadingComponent content='Loading app' inverted={true}/>;

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2> Activity Filters</h2>

            </Grid.Column>
        </Grid>
    );
})