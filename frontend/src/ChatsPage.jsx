const ChatsPage =(props) => {
    return( 
    <div style={{height: '100vh'}}>
        <div
        projectId='eec205ef-f15c-40c2-a9a8-362297a92673'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage