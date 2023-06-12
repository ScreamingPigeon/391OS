// import cp_one from '../checkpoints/checkpoint1.md';


// try to see if markdown page can be render correctly
// used to render markdown pages for the checkpoints
const CheckpointHolder = ({cpData}) => { 
    return (
        <>
            <h3>{cpData.title}</h3>
            <div>{cpData.brief}</div>
            <div>{cpData.mainContent}</div>
        </>
    );
}


export default CheckpointHolder