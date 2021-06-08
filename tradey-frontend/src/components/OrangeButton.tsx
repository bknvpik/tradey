import '../styles/components/OrangeButton.scss';

export default function OrangeButton(props: any) {
    return (
        <button className="orange-button" type={ props.type } style={ props.style } onClick={ props.onClick }>
            { props.text }
        </button>
    )
}
