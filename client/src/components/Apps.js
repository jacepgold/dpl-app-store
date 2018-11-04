import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Dropdown, 
  Divider,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Apps extends React.Component {
  state = { category: '' }

  apps = () => {
    const { apps } = this.props;
    const { category } = this.state;
    let visible = apps;
    if (category)
      visible = apps.filter( a => a.category === category )
    return visible.map( app =>
      <Card key={app.id}>
        <Image src={app.logo} />
        <Card.Content>
          <Card.Header>
            {app.name}
          </Card.Header>
          <Card.Meta>
            <span>{app.author}</span>
          </Card.Meta>
          <Card.Description>
            {app.category}
          </Card.Description>
          <Card.Content extra>
            <Link to={`/apps/${app.id}`}>
              View App
            </Link>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }

  categoryOptions = () => {
    return this.props.categories.map( (c,i) => { 
      return { key: i, text: c, value: c }
    })
  }

  render() {
    const { category } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Apps</Header>
        <Dropdown
          placeholder="Filter by category"
          fluid
          selection
          options={this.categoryOptions()}
          onChange={ (e, data) => this.setState({ category: data.value }) }
          value={category}
        />
        { category && 
            <Button
              fluid
              basic
              onClick={ () => this.setState({ category: '' }) }
            >
              Clear Filter: {category}
            </Button>
        }
        <Divider />
        <Card.Group itemsPerRow={4}>
          { this.apps() }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { apps } = state;
  const categories = [...new Set(apps.map( a => a.category ))]
  return { apps, categories }
}

export default connect(mapStateToProps)(Apps);



