import * as React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';
import {observer} from 'mobx-react';
import {FormView, FormProps} from './formView';

export interface TonvaFormProps extends FormProps {
    className?: string;
    //formView: FormView;
    initValues?: any;
}

@observer 
export class TonvaForm extends React.Component<TonvaFormProps, {}> {
    formView: FormView;
    constructor(props:TonvaFormProps) {
        super(props);
        this.formView = new FormView(this.props);
    }
    componentDidMount() {
        this.formView.setInitValues(this.props.initValues);
    }
/*
    static childContextTypes = {
        formView: PropTypes.object
    }
    getChildContext(): FormView {
        return this.formView;
    }
*/    
/*
    componentDidMount() {
    }*/
/*    
    componentWillUpdate() {
        this.formView.setInitValues();
    }
*/
    render() {
        let {className, children, initValues} = this.props;
        //let formView = new FormView(this.props);
        //formView.setInitValues();
        return <div className={classNames('container', 'mt-4', className)}>
            {
                children === undefined? 
                    this.formView.render() : 
                    <form onSubmit={this.formView.onSubmit}>{children}</form>
            }
        </div>;
    }
}
