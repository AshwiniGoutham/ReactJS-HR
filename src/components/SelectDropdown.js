import React from "react";
import { connect } from "react-redux";
import Select from '@material-ui/core/Select';
import { MenuItem, NativeSelect } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});
class SelectDropdown extends React.Component {

    render() {

        return (
            <div>
                {/* <select className="form-control-sm" onChange={(e) => this.props.onSelectChange(e.target.value)}>
                    <option id="1">Choose an option</option>
                    <option id="2">As a delegate</option>
                    <option id="3">As manager</option>
                    <option id="4">myself</option>
                </select> */}
                {/* <Select
                    value={this.props.state.value}
                    onChange={(e) => this.props.onSelectChange(e.target.value)}
                    displayEmpty>
                    <MenuItem value={0}>
                        <em>Choose an option</em>
                    </MenuItem>
                    <MenuItem value={1}>As a delegate</MenuItem>
                    <MenuItem value={2}>As manager</MenuItem>
                    <MenuItem value={3}>myself</MenuItem>
                </Select> */}

                <NativeSelect
                    value={this.props.state.value}
                    onChange={(e) => this.props.onSelectChange(e.target.value)}
                    input={<BootstrapInput />}>
                    <option value={0}>Choose an option</option>
                    <option value={1}>As a delegate</option>
                    <option value={2}>As manager</option>
                    <option value={3}>myself</option>
                </NativeSelect>

                {this.props.state.value}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectChange: newValue => {
            dispatch({
                type: "SELECT_CHANGE",
                payload: newValue
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectDropdown);

