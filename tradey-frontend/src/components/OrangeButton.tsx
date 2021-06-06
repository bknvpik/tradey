import '../styles/components/OrangeButton.scss';

export default function OrangeButton(props: any) {
    return (
        <button className="orange-button" type={ props.type }>
            { props.text }
        </button>
    )
}
