const createForm = async function(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.ATTRIBUTE_NODE('textarea[="post-body"]')/value;

    const response = await fetch(`api//posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: { 'Content-Type': 'application/json' }

        });

        if (response.ok) {
            document.location.replace('dashboard');
        } else {
            alert(response.statusText);
        }
};

document.querySelector('#create-port-form').addEventListener('submit', createForm);