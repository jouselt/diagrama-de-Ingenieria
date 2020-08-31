import React, {Component} from 'react'
import image from '../assets/Plano2.png'

const PlanoContext = React.createContext();

class PlanosProvider extends Component {
    state = {
        planos: [],
        sortedPlanos: [],
        featuredPlanos: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0
    };

    getData = async () => {
        try {
            let activeCoordinates = [
                {
                    coords: '2301,1647,1310,1464',
                    shape: "rect",
                    id: "1",
                    hoverMsg: "Prueba 1",
                    altText: "ll",
                    infoTitle: "info del tercer componente",
                    infoList: [
                        {
                            name: "uno",
                            description: "data uno",
                            key: "1"
                        },
                        {
                            name: "dos",
                            description: "data dos",
                            key: "2"
                        }
                    ],
                }, {
                    coords: '2716,1433,2913,1522,2913,1607,2716,1701',
                    shape: "poly",
                    id: "2",
                    hoverMsg: "Prueba 2",
                    altText: "ll",
                    infoTitle: "info del tercer componente",
                    infoList: [
                        {
                            name: "uno",
                            description: "data uno",
                            key: "1"
                        },
                        {
                            name: "dos",
                            description: "data dos",
                            key: "2"
                        }
                    ],
                }, {
                    coords: '3042,1513,3238,1433,3243,1696,3042,1607',
                    shape: "poly",
                    id: "3",
                    hoverMsg: "Prueba 3",
                    altText: "ll",
                    infoTitle: "info del tercer componente",
                    infoList: [
                        {
                            name: "uno",
                            description: "data uno",
                            key: "1"
                        },
                        {
                            name: "dos",
                            description: "data dos",
                            key: "2"
                        }
                    ],
                }, {
                    coords: '3819,2999,3413,2754',
                    shape: "rect",
                    id: "4",
                    hoverMsg: "Prueba 2",
                    altText: "ll",
                    infoTitle: "lista de detalles",
                    infoList: [
                        {
                            name: "uno",
                            description: "data uno",
                            key: "1"
                        },
                        {
                            name: "dos",
                            description: "data dos",
                            key: "2"
                        }
                    ],
                }, {
                    coords: '1703,1821,1953,1924',
                    shape: "rect",
                    id: "5",
                    hoverMsg: "Prueba 5",
                    altText: "ll",
                    infoTitle: "info del quimto componente",
                    infoList: [
                        {
                            name: "uno",
                            description: "data uno",
                            key: "1"
                        },
                        {
                            name: "dos",
                            description: "data dos",
                            key: "2"
                        }
                    ],
                }];
            let response = {
                errorCode: "0",
                data: true,
                items: [
                    {
                        name: "Plano 1",
                        id: "1",
                        img: image,
                        activeCoordinates: activeCoordinates
                    },
                    {
                        name: "Plano 2",
                        id: "2",
                        img: image,
                        activeCoordinates: activeCoordinates
                    },
                    {
                        name: "Plano 3",
                        id: "3",
                        img: image,
                        activeCoordinates: activeCoordinates
                    },
                    {
                        name: "Plano 4",
                        id: "4",
                        img: image,
                        activeCoordinates: activeCoordinates
                    },
                    {
                        name: "Plano 5",
                        id: "5",
                        img: image,
                        activeCoordinates: activeCoordinates
                    }
                ]
            }
            let planos = response.items;
            this.setState({
                planos,
                sorted: planos,
                loading: false,
            })
        } catch (err) {
            console.error('error', err)
        }
    }

    componentDidMount() {
        this.getData()

    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys
            let plano = {
                ...item,
                id
            }
            return plano;
        });
        return tempItems
    }

    getPlano = (planoId, planos) => {
        return planos.find(plano => plano.id === planoId)
    }

    handleChange = event => {
        const target = event.target
        const name = target.name
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value
        this.setState({
            [name]: value
        }, this.filterPlanos)
    }

    filterPlanos = () => {
        let {
            planos,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state
        // original planos
        let tempPlanos = [...planos]
        capacity = parseInt(capacity, 10)
        price = parseInt(price, 10)

        //filter by type
        if (type !== 'all') {
            tempPlanos = tempPlanos.filter((plano) => {
                return plano.type === type
            })
        }

        //filter by capacity
        if (capacity !== 1) {
            tempPlanos = tempPlanos.filter((plano) => {
                return plano.capacity >= capacity
            })
        }
        //filter by price
        tempPlanos = tempPlanos.filter((plano) => {
            return plano.price <= price
        })
        //filter by size
        tempPlanos = tempPlanos.filter((plano) => {
            return plano.size <= maxSize && plano.size >= minSize
        })
        if (breakfast) {
            tempPlanos = tempPlanos.filter((plano) => {
                return plano.breakfast
            })
        }

        if (pets) {
            tempPlanos = tempPlanos.filter((plano) => {
                return plano.pets
            })
        }

        this.setState({sorted: tempPlanos})
    }

    render() {

        return (
            <PlanoContext.Provider
                value={{
                    ...this.state,
                    getPlano: this.getPlano,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </PlanoContext.Provider>

        )
    }
}

const PlanosConsumer = PlanoContext.Consumer;

export {PlanosProvider, PlanosConsumer, PlanoContext};