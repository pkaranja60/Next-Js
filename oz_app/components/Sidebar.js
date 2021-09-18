import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';

function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
z-index: 1;
background-color: white;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.7s;
}
`;

const IconsContainer = styled.div``;