type StatusProps = {
    staus: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message;
    if(props.staus === 'loading'){
        message = 'Loading...'
    } else if(props.staus === 'success'){
        message = 'Data Fetched Successfully!'
    }else{
        message = 'Error Fetching Data'
    }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}
