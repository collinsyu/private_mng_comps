import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';

export default class HeaderSearch extends PureComponent {
  static defaultProps = {
    defaultActiveFirstOption: false,
    onPressEnter: () => {},
    onSearch: () => {},
    className: '',
    placeholder: '',
    dataSource: [],
  };
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    onPressEnter: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    dataSource: PropTypes.array,
  };
  state = {
    searchMode: false,
    value: '',
  };
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.timeout = setTimeout(() => {
        this.props.onPressEnter(this.state.value); // Fix duplicate onPressEnter
      }, 0);
    }
  }
  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }
  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.state.searchMode) {
        this.input.focus();
      }
    });
  }
  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    });
  }
  render() {
    const { className, placeholder, ...restProps } = this.props;
    const inputClass = classNames("input", {
      ["show"]: this.state.searchMode,
    });
    return (
      <span
        className={classNames(className, "_yhq_headerSearch")}
        onClick={this.enterSearchMode}
      >
        <Icon type="search" key="Icon" />
        <AutoComplete
          key="AutoComplete"
          {...restProps}
          className={inputClass}
          value={this.state.value}
          onChange={this.onChange}
        >
          <Input
            placeholder={placeholder}
            ref={(node) => { this.input = node; }}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
        <style>{`

          ._yhq_headerSearch .anticon-search {
            cursor: pointer;
            font-size: 16px;
          }
          ._yhq_headerSearch .input {
            transition: width .3s, margin-left .3s;
            width: 0;
            background: transparent;
            border-radius: 0;
          }
          ._yhq_headerSearch .input .ant-select-selection {
            background: transparent;
          }
          ._yhq_headerSearch .input input {
            border: 0;
            padding-left: 0;
            padding-right: 0;
            box-shadow: none !important;
          }
          ._yhq_headerSearch .input,
          ._yhq_headerSearch .input:hover,
          ._yhq_headerSearch .input:focus {
            border-bottom: 1px solid hsv(0, 0, 85%);;
          }
          ._yhq_headerSearch .input.show {
            width: 210px;
            margin-left: 8px;
          }

        `}</style>
      </span>
    );
  }
}
